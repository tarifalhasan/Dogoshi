import { FC } from "react";

interface Props {
  title: string;
}

const RoadmapShape: FC<Props> = ({ title }) => {
  return (
    <div className="flex my-14 relative justify-center ">
      <svg
        width={32}
        height={286}
        viewBox="0 0 32 286"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <ellipse
          cx="16.0112"
          cy="269.944"
          rx="15.9614"
          ry={16}
          fill="#F40010"
          fillOpacity="0.1"
        />
        <ellipse cx="16.0113" cy="269.944" rx="7.98069" ry={8} fill="#F40010" />
        <line
          y1="-0.5"
          x2="268.832"
          y2="-0.5"
          transform="matrix(-0.00371084 0.999993 -0.999992 -0.00398639 17.0089 0.944336)"
          stroke="#F40010"
        />
      </svg>
    </div>
  );
};

export default RoadmapShape;
