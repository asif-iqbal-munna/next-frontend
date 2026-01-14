/* eslint-disable @typescript-eslint/no-unused-vars */

/* 
  
  // Inside useOptimizedSearch.ts - The Sorting Logic
const filteredAndSorted = useMemo(() => {
  if (!query) return data;
  
  const terms = query.toLowerCase().trim().split(/\s+/); // Split by spaces

  const matches = searchableData.filter((item) => {
    // Ensure EVERY term in the query is found somewhere in the search string
    return terms.every(term => item._searchString.includes(term));
  });

  return matches.sort((a, b) => {
    const calculateScore = (primary: string) => {
      let score = 0;
      const words = primary.split(/\s+/);

      terms.forEach(term => {
        // 1. Highest: Primary field starts exactly with the term
        if (primary.startsWith(term)) score += 10;
        
        // 2. High: One of the words in the primary field starts with the term
        else if (words.some(word => word.startsWith(term))) score += 5;
        
        // 3. Normal: Term is just contained within the string
        else score += 1;
      });
      return score;
    };

    return calculateScore(b._primaryField) - calculateScore(a._primaryField);
  });
}, [query, searchableData, data]);
  */

import { useMemo, useState, useTransition } from "react";

export function useOptimizedSearch<T, K extends keyof T>(
  data: T[],
  searchKeys: K[]
) {
  const [query, setQuery] = useState("");
  const [isPending, startTransition] = useTransition();

  // 1. Pre-calculate search strings once
  // We create a combined lowercase string of all searchable fields
  const searchableData = useMemo(() => {
    return data.map((item) => {
      const searchString = searchKeys
        .map((key) => String(item[key] || "").toLowerCase())
        .join(" ");

      return {
        ...item,
        _searchString: searchString,
        // We keep the primary field (usually the first key) for start-of-word scoring
        _primaryField: String(item[searchKeys[0]] || "").toLowerCase(),
      };
    });
  }, [data, searchKeys]);

  // 2. Filter & Sort Logic
  const filteredAndSorted = useMemo(() => {
    if (!query) return data;
    const lowQuery = query.toLowerCase();

    // Filter based on the pre-computed combined string
    const matches = searchableData.filter((item) =>
      item._searchString.includes(lowQuery)
    );

    // Advanced Sort by Relevance
    return matches.sort((a, b) => {
      const getScore = (primary: string) => {
        if (primary.startsWith(lowQuery)) return 3; // Exact start
        if (primary.includes(` ${lowQuery}`)) return 2; // Word start
        return 1; // Partial match
      };

      return getScore(b._primaryField) - getScore(a._primaryField);
    });
  }, [query, searchableData, data]);

  const handleSearch = (val: string) => {
    startTransition(() => setQuery(val));
  };

  // Remove the internal helper keys before returning to UI
  const filteredData = (
    filteredAndSorted as Array<
      T & { _searchString?: string; _primaryField?: string }
    >
  ).map(({ _searchString, _primaryField, ...rest }) => rest as T);

  return {
    query,
    handleSearch,
    filteredData,
    isPending,
  };
}
