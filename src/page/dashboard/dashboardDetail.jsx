import { useLocation, Outlet} from "react-router-dom";
import { ChartList } from "./dashboardList";
import { Line, Column } from "@ant-design/plots";

function DashboardDetail() {
    const location = useLocation();
    const slug = location && location.pathname && location.pathname.split("/")[2];
    const chart = ChartList[slug];

    if(!chart) {
      return <span>The dashboard chart you've requested doesn't exist.</span>;
    }
    const { title, description } = chart;

    const lineConfig = {
      data: chart.data,
      padding: 'auto',
      xField: 'Date',
      yField: 'subcription',
      point: {
        size: 5,
        shape: 'diamond',
        style: {
          fill: 'white',
          stroke: '#5B8FF9',
          lineWidth: 2,
        },
      },
      tooltip: {
        showMarkers: false,
      },
      state: {
        active: {
          style: {
            shadowBlur: 4,
            stroke: '#000',
            fill: 'red',
          },
        },
      },
      interactions: [
        {
          type: 'marker-active',
        },
      ],
    };

    const columnConfig = {
      data: chart.data,
      xField: 'Date',
      yField: 'revenue',
      label: {
        position: 'middle',
        style: {
          fill: '#FFFFFF',
          opacity: 0.6,
        },
      },
      xAxis: {
        label: {
          autoHide: true,
          autoRotate: false,
        },
      },
      meta: {
        type: {
          alias: 'sss',
        },
        sales: {
          alias: 'wwww',
        },
      },
    }
    return (
      <div style={{ padding: 20 }}>
        <h3>{title}</h3>
        <p>{description}</p>
        {chart.chartType === "Line" ? <Line {...lineConfig}/> : <Column {...columnConfig} />}
        <Outlet />
      </div>
    );
  }

export default DashboardDetail;