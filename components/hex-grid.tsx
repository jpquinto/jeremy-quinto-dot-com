import Image from "next/image";

export const HexGrid = () => {
  const hexGrid = [
    [false, false, false, false],
    [false, false, false],
    [false, false, false, false],
    [false, false, false],
    [false, false, false, false],
    [false, false, false],
    [false, false, false, false],
    [false, false, false],
    [false, false, false, false],
    [false, false, false],
    [false, false, false, false],
    [false, false, false],
    [false, false, false, false],
    [false, false, false],
    [false, false, false, false],
    [false, false, false],
    [false, false, false, false],
    [false, false, false],
    [false, false, false, false],
    [false, false, false],
    
  ];

  const hexColors = ["hex-gray", "hex-emerald", "hex-lime", "hex-green"];

  // Get random hex color
  const getRandomHexColor = () => {
    return hexColors[Math.floor(Math.random() * hexColors.length)];
  };

  // Calculate opacity based on distance from center
  const getOpacityByDistance = (
    rowIndex: number,
    colIndex: number,
    rowLength: number
  ) => {
    // Calculate center of the grid
    const centerRow = 1; // Middle row (0-indexed)
    const centerCol = rowLength / 2;

    // Calculate distance from center (using Manhattan distance for simplicity)
    const distance =
      Math.abs(rowIndex - centerRow) + Math.abs(colIndex - centerCol);

    // Map distance to opacity (closer = higher opacity)
    // Max distance in this grid is about 3-4, so we'll scale accordingly
    const maxDistance = 4;
    const minOpacity = 0.3;
    const maxOpacity = 0.7;

    const opacity =
      maxOpacity - (distance / maxDistance) * (maxOpacity - minOpacity);
    return Math.max(minOpacity, Math.min(maxOpacity, opacity));
  };

  return (
    <div className="flex flex-col items-center justify-center space-y-4 text-center">

      {/* Desktop Layout: AWS text left, hex grid right */}
        <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-16">
          {/* Hexagonal Grid with Gradient Fades */}
          <div className="relative">
            {/* Top gradient fade */}
            <div className="absolute left-0 top-0 bottom-0 h-[600px] w-full bg-gradient-to-b from-gray-100 to-transparent pointer-events-none z-10" />

            {/* Left gradient fade */}
            <div className="absolute left-0 top-0 bottom-0 w-[100px] bg-gradient-to-r from-gray-100 to-transparent pointer-events-none z-10" />

            {/* Right gradient fade */}
            <div className="absolute right-0 top-0 bottom-0 w-[100px] bg-gradient-to-l from-gray-100 to-transparent pointer-events-none z-10" />

            {hexGrid.map((row, rowIndex) => (
              <div
                key={rowIndex}
                className="flex justify-center items-center"
                style={{
                  marginLeft: rowIndex % 2 === 1 ? "0px" : "0",
                  marginTop: rowIndex === 0 ? "0" : "-30px",
                }}
              >
                {row.map((_, colIndex) => {
                  return (
                    <div
                      key={`${rowIndex}-${colIndex}`}
                      className="relative mx-1"
                      style={{ width: "125px", height: "144px" }}
                    >
                        <div
                          style={{
                            width: "125px",
                            height: "144px",
                            opacity: getOpacityByDistance(
                              rowIndex,
                              colIndex,
                              row.length
                            ),
                          }}
                        >
                          <Image
                            src={`/img/certifications/${getRandomHexColor()}.png`}
                            alt="Empty hexagon"
                            width={508}
                            height={586}
                            className="w-full h-full object-contain"
                          />
                        </div>
                    </div>
                  );
                })}
              </div>
            ))}
          </div>
        </div>
    </div>
  );
};
