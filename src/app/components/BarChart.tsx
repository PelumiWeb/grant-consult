import React, { useEffect, useRef } from "react";
import { Chart, ChartData, ChartOptions } from "chart.js";

// Define props for the BarChart component
interface BarChartProps {
  data: ChartData<"bar">; // Chart data
  options?: ChartOptions<"bar">; // Chart options
}

const BarChart: React.FC<BarChartProps> = ({ data, options }) => {
  const chartRef = useRef<HTMLCanvasElement>(null); // Reference to the canvas element
  const chartInstance = useRef<Chart<"bar"> | null>(null); // Reference to the Chart.js instance

  useEffect(() => {
    if (!chartRef.current) {
      console.error("Canvas element is not available.");
      return;
    }

    const ctx = chartRef.current.getContext("2d");
    if (!ctx) {
      console.error("Unable to get canvas 2D context.");
      return;
    }

    // Destroy existing chart instance if it exists
    if (chartInstance.current) {
      chartInstance.current.destroy();
    }

    // Create a new chart instance
    chartInstance.current = new Chart(ctx, {
      type: "bar",
      data,
      options,
    });

    // Cleanup the chart instance on unmount
    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy();
        chartInstance.current = null; // Reset the chart instance reference
      }
    };
  }, [data, options]); // Recreate the chart when data or options change

  return <canvas ref={chartRef}></canvas>;
};

export default BarChart;
