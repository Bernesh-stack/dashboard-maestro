import React, { useState, useEffect } from 'react';
import { SparklineComponent, Inject, SparklineTooltip } from '@syncfusion/ej2-react-charts';

const SparkLine = ({ id, height, width, data, color, type, currentColor }) => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  if (!Array.isArray(data) || data.length === 0) return null;

  return (
    <SparklineComponent
      key={windowWidth} // force remount on resize
      id={id}
      height={typeof height === 'string' ? height : `${height}px`}
      width={typeof width === 'string' ? width : `${width}px`}
      lineWidth={1}
      valueType="Numeric"
      fill={color}
      border={{ color: currentColor, width: 2 }}
      dataSource={data}
      xName="x"
      yName="yval"
      type={type}
      enableRtl={false}
      axisSettings={{ lineSettings: { color: 'transparent' } }}
      tooltipSettings={{
        visible: true,
        format: '${x} : ${yval}',
      }}
    >
      <Inject services={[SparklineTooltip]} />
    </SparklineComponent>
  );
};

export default SparkLine;
