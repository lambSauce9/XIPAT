import { Link, Outlet } from "react-router-dom";

export const ChartList = {
  "subcription-dashboard": {
    title: "Subcription",
    description: "Subcription in the last 7 days",
    chartType: "Line",
    data: [
      {
        Date: "9-06-2023",
        subcription: 20,
      },
      {
        Date: "10-06-2023",
        subcription: 30,
      },
      {
        Date: "11-06-2023",
        subcription: 40,
      },
      {
        Date: "12-06-2023",
        subcription: 10,
      },
      {
        Date: "13-06-2023",
        subcription: 15,
      },
      {
        Date: "14-06-2023",
        subcription: 90,
      },
      {
        Date: "15-06-2023",
        subcription: 33,
      },
    ],
  },
  "revenue-dashboard": {
    title: "Revenue",
    description: "Revenue this year",
    chartType: "Column",
    data: [
      {
        Date: "2010-01",
        revenue: 1998,
      },
      {
        Date: "2010-02",
        revenue: 1850,
      },
      {
        Date: "2010-03",
        revenue: 1720,
      },
      {
        Date: "2010-04",
        revenue: 1818,
      },
      {
        Date: "2010-05",
        revenue: 1920,
      },
      {
        Date: "2010-06",
        revenue: 1802,
      },
      {
        Date: "2010-07",
        revenue: 1945,
      },
      {
        Date: "2010-08",
        revenue: 1856,
      },
      {
        Date: "2010-09",
        revenue: 2107,
      },
      {
        Date: "2010-10",
        revenue: 2140,
      },
      {
        Date: "2010-11",
        revenue: 2311,
      },
      {
        Date: "2010-12",
        revenue: 1972,
      },
    ],
  },
};

function DashboardList() {
  return (
    <>
      <ul>
        {Object.entries(ChartList).map(([slug, { title }]) => (
          <Link to={`/dashboard/${slug}`}>
            <div className="Dashboard-link">{title}</div>
          </Link>
        ))}
      </ul>
      <Outlet />
    </>
  );
}

export default DashboardList;
