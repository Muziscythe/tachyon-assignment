import "./Graph.css";
import PermIdentityOutlinedIcon from "@mui/icons-material/PermIdentityOutlined";
import ApiOutlinedIcon from "@mui/icons-material/ApiOutlined";
import FunctionsOutlinedIcon from "@mui/icons-material/FunctionsOutlined";
import StorageOutlinedIcon from "@mui/icons-material/StorageOutlined";
import Arrow from "../Arrow/Arrow";

function Graph() {
  return (
    <div className="graph">
      <div className="graphWrapper">
        <div className="graph__iconWrapper">
          <PermIdentityOutlinedIcon className="graph__icon" />
        </div>
        <Arrow />
        <div className="graph__iconWrapper">
          <ApiOutlinedIcon className="graph__icon" />
        </div>
        <Arrow />

        <div className="graph__iconWrapper">
          <FunctionsOutlinedIcon className="graph__icon" />
        </div>
        <Arrow />

        <div className="graph__iconWrapper">
          <StorageOutlinedIcon className="graph__icon" />
        </div>
      </div>
    </div>
  );
}

export default Graph;
