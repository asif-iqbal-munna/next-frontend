import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { ViewType } from "../../../../../type/general.types";

type SwitchViewProps = {
  view: ViewType;
  changeView: (value: ViewType) => void;
};

const SwitchUserView = ({ view, changeView }: SwitchViewProps) => {
  return (
    <ToggleGroup type="single" value={view} onValueChange={changeView}>
      <ToggleGroupItem value="table">Table</ToggleGroupItem>
      <ToggleGroupItem value="card">Card</ToggleGroupItem>
    </ToggleGroup>
  );
};

export default SwitchUserView;
