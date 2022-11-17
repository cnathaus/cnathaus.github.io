import classNames from "classnames";
import "./VerticalTimeline.css";

interface VerticalTimelineProps {
  animate?: boolean;
  className?: string;
  layout?: "1-column" | "1-column-left" | "2-columns";
  lineColor?: string;
  children?: React.ReactNode;
}

const VerticalTimeline = ({
  animate = true,
  className,
  layout = "2-columns",
  lineColor = "white",
  children,
}: VerticalTimelineProps) => {
  if (typeof window === "object") {
    document.documentElement.style.setProperty("--line-color", lineColor);
  }
  return (
    <div
      className={classNames(className, "vertical-timeline", {
        "vertical-timeline--animate": animate,
        "vertical-timeline--two-columns": layout === "2-columns",
        "vertical-timeline--one-column-left":
          layout === "1-column" || layout === "1-column-left",
      })}
    >
      {children}
    </div>
  );
};

export default VerticalTimeline;
