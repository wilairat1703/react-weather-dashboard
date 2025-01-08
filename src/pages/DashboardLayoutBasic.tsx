import BarChartIcon from "@mui/icons-material/BarChart";
import DashboardIcon from "@mui/icons-material/Dashboard";
import DescriptionIcon from "@mui/icons-material/Description";
import HomeIcon from '@mui/icons-material/Home';
import LayersIcon from "@mui/icons-material/Layers";
import { createTheme } from "@mui/material/styles";
import { AppProvider, type Navigation } from "@toolpad/core/AppProvider";
import { DashboardLayout } from "@toolpad/core/DashboardLayout";
import { useDemoRouter } from "@toolpad/core/internal";
import { Outlet, useNavigate } from "react-router-dom";

const NAVIGATION: Navigation = [
  {
    kind: "header",
    title: "Main items",
  },
  {
    segment: "/",
    title: "Home",
    icon: <HomeIcon />,
  },
  {
    segment: "/dashboard",
    title: "Dashboard",
    icon: <DashboardIcon />,
  },
  {
    kind: "divider",
  },
  {
    kind: "header",
    title: "Analytics",
  },
  {
    segment: "reports",
    title: "Reports",
    icon: <BarChartIcon />,
    children: [
      {
        segment: "sales",
        title: "Sales",
        icon: <DescriptionIcon />,
      },
      {
        segment: "traffic",
        title: "Traffic",
        icon: <DescriptionIcon />,
      },
    ],
  },
  {
    segment: "integrations",
    title: "Integrations",
    icon: <LayersIcon />,
  },
];

const demoTheme = createTheme({
  cssVariables: {
    colorSchemeSelector: "data-toolpad-color-scheme",
  },
  colorSchemes: { light: true },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 600,
      lg: 1200,
      xl: 1536,
    },
  },
});

function DemoPageContent() {
  return <Outlet />;
}

interface DemoProps {
  window?: () => Window;
}

export default function DashboardLayoutBasic(props: DemoProps) {
  const { window } = props;
  const navigate = useNavigate();
  const router = useDemoRouter("/dashboard");

  const demoWindow = window !== undefined ? window() : undefined;

  const updatedNavigation = NAVIGATION.map((item) => {
    if ("segment" in item) {
      // Check if 'segment' exists in the item
      if (item.segment === "/") {
        return {
          ...item,
          action: (
            <div
              className="px-4 py-2  w-5/6 h-10  rounded-lg cursor-pointer text-center transition-all duration-300"
              onClick={() => navigate("/")}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === "Space") {
                  navigate("/");
                }
              }}
            ></div>
          ),
        };
      } else if (item.segment === "/dashboard") {
        return {
          ...item,
          action: (
            <div
              className="px-4 py-2 w-5/6 h-10 text-white rounded-lg cursor-pointer "
              onClick={() => navigate("/dashboard")}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === "Space") {
                  navigate("/two");
                }
              }}
            ></div>
          ),
        };
      }
    }
    return item;
  });

  return (
    <AppProvider
      navigation={updatedNavigation}
      router={router}
      branding={{
        logo: <img src="https://mui.com/static/logo.png" alt="MUI logo" />,
        title: 'Wilairat',
        homeUrl: '/toolpad/core/introduction',
      }}
      theme={demoTheme}
      window={demoWindow}
    >
      <DashboardLayout>
        <DemoPageContent />
      </DashboardLayout>
    </AppProvider>
  );
}
