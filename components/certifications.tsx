import Image from "next/image";
import Link from "next/link";

export const Certifications = () => {
  // Define the hex grid layout (true = badge, false = empty hex)
  // 3 rows x 6 columns (row 2 has 5)
  const hexGrid = [
    [false, false, true, true, false, false],
    [false, true, true, true, true],
    [false, false, false, false, false, false],
  ];

  const badges = [
    {
      src: "/img/certifications/cpp.png",
      alt: "AWS Certified Cloud Practitioner",
      href: "https://www.credly.com/badges/5c686b30-87b8-40f8-8517-cd9e6f8c586c/public_url",
    },
    {
      src: "/img/certifications/aip.png",
      alt: "AWS Certified AI Practitioner",
      href: "https://www.credly.com/badges/8c377362-08ec-43c2-b3f3-4ab939bdf047/public_url",
    },
    {
      src: "/img/certifications/developer.png",
      alt: "AWS Certified Developer Associate",
      href: "https://www.credly.com/badges/c0ec09df-e880-4105-96e2-25ccbcfaa8ee/public_url",
    },
    {
      src: "/img/certifications/aws.png",
      alt: "AWS Certifications",
      href: "https://aws.amazon.com/certification/",
    },
    {
      src: "/img/certifications/saa.png",
      alt: "AWS Certified Solutions Architect Associate",
      href: "https://www.credly.com/badges/2277fb51-7634-4a4b-9a35-eb94c7aa4243/public_url",
    },
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
    const minOpacity = 0.2;
    const maxOpacity = 0.6;

    const opacity =
      maxOpacity - (distance / maxDistance) * (maxOpacity - minOpacity);
    return Math.max(minOpacity, Math.min(maxOpacity, opacity));
  };

  let badgeIndex = 0;

  return (
    <div className="flex flex-col items-center justify-center space-y-4 text-center">
      <div className="space-y-2">
        <h3 className="bg-gradient-to-b from-black/80 to-black/20 bg-clip-text text-transparent drop-shadow-2xl text-3xl tracking-tight sm:text-5xl pb-3">
          certifications
        </h3>
        <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
          4x AWS certified - i know my way around the cloud
        </p>
      </div>

      {/* Desktop Layout: AWS text left, hex grid right */}
      <div className="w-full max-w-6xl mx-auto pt-8">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-16">
          {/* Hexagonal Grid with Gradient Fades */}
          <div className="relative">
            {/* Left gradient fade */}
            <div className="absolute left-0 top-0 bottom-0 w-[100px] bg-gradient-to-r from-white to-transparent dark:from-gray-950 pointer-events-none z-10" />

            {/* Right gradient fade */}
            <div className="absolute right-0 top-0 bottom-0 w-[100px] bg-gradient-to-l from-white to-transparent dark:from-gray-950 pointer-events-none z-10" />

            {hexGrid.map((row, rowIndex) => (
              <div
                key={rowIndex}
                className="flex justify-center items-center"
                style={{
                  marginLeft: rowIndex % 2 === 1 ? "0px" : "0",
                  marginTop: rowIndex === 0 ? "0" : "-30px",
                }}
              >
                {row.map((hasBadge, colIndex) => {
                  const currentBadge = hasBadge ? badges[badgeIndex++] : null;

                  return (
                    <div
                      key={`${rowIndex}-${colIndex}`}
                      className="relative mx-1"
                      style={{ width: "125px", height: "144px" }}
                    >
                      {currentBadge ? (
                        <Link
                          href={currentBadge.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block transition-transform hover:scale-110 hover:z-10"
                        >
                          <Image
                            src={currentBadge.src}
                            alt={currentBadge.alt}
                            width={508}
                            height={586}
                            className="w-full h-full object-contain drop-shadow-lg"
                          />
                        </Link>
                      ) : (
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
                      )}
                    </div>
                  );
                })}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
