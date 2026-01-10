"use client";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useState } from "react";

const ClientDataFetching = () => {
  const [activeTab, setActiveTab] = useState<string>("tab-1");
  return (
    <div className="page">
      <div className="tabs vertical">
        <div className="tabs-links">
          <div
            onClick={() => setActiveTab("tab-1")}
            className={`tab ${activeTab === "tab-1" && "active"}`}
          >
            Data fetch With React Query
          </div>
          <div
            onClick={() => setActiveTab("tab-2")}
            className={`tab ${activeTab === "tab-2" && "active"}`}
          >
            Tab 2
          </div>
          <div
            onClick={() => setActiveTab("tab-3")}
            className={`tab ${activeTab === "tab-3" && "active"}`}
          >
            Tab 3
          </div>
        </div>
        <div className="tabs-content"></div>
      </div>
    </div>
  );
};

export default ClientDataFetching;
