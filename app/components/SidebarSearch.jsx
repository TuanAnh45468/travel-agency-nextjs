export const SidebarSearch = ({ className }) => {
  return (
    <div
      className={`w-[343px] h-[880px] flex flex-col gap-y-[32px] border border-gray border-y-0 border-l-0 ${className}`}
    >
      <h2 className={"font-bold text-[20px]"}>Filters</h2>
      <div>
        <span className={"font-semi-bold text-base"}>Rating</span>
        <div className={"flex gap-x-4"}>
          <div
            className={
              "w-[40px] h-[32px] border hover:bg-mint-green border-mint-green flex items-center justify-center"
            }
          >
            0+
          </div>
          <div
            className={
              "w-[40px] h-[32px] border border-mint-green hover:bg-mint-green flex items-center justify-center"
            }
          >
            1+
          </div>
          <div
            className={
              "w-[40px] h-[32px] border border-mint-green hover:bg-mint-green flex items-center justify-center"
            }
          >
            2+
          </div>
          <div
            className={
              "w-[40px] h-[32px] border border-mint-green hover:bg-mint-green flex items-center justify-center"
            }
          >
            3+
          </div>
          <div
            className={
              "w-[40px] h-[32px] border border-mint-green hover:bg-mint-green flex items-center justify-center"
            }
          >
            4+
          </div>
        </div>
      </div>
      <div className={"flex flex-col gap-y-4"}>
        <span className={"font-semi-bold text-base"}>Airlines</span>
        <div className={"flex flex-col gap-y-2"}>
          <div className={"flex items-center gap-x-2"}>
            <input
              type="checkbox"
              id={"emirated"}
              className="checkbox rounded-sm"
            />
            <label htmlFor={"emirated"} className={"font-medium"}>
              Emirated
            </label>
          </div>

          <div className={"flex items-center gap-x-2"}>
            <input
              type="checkbox"
              id={"dubai"}
              className="checkbox rounded-sm"
            />
            <label htmlFor={"dubai"} className={"font-medium"}>
              Fly Dubai
            </label>
          </div>

          <div className={"flex items-center gap-x-2"}>
            <input
              type="checkbox"
              id={"qatar"}
              className="checkbox rounded-sm"
            />
            <label htmlFor={"qatar"} className={"font-medium"}>
              Qatar
            </label>
          </div>

          <div className={"flex items-center gap-x-2"}>
            <input
              type="checkbox"
              id={"etihad"}
              className="checkbox rounded-sm"
            />
            <label htmlFor={"etihad"} className={"font-medium"}>
              Etihad
            </label>
          </div>
        </div>
      </div>

      <div className={"flex flex-col gap-y-4"}>
        <span className={"font-semi-bold text-base"}>Trips</span>
        <div className={"flex flex-col gap-y-2"}>
          <div className={"flex items-center gap-x-2"}>
            <input
              type="checkbox"
              id={"round-trip"}
              className="checkbox rounded-sm"
            />
            <label htmlFor={"round-trip"} className={"font-medium"}>
              Round trip
            </label>
          </div>

          <div className={"flex items-center gap-x-2"}>
            <input
              type="checkbox"
              id={"on-way"}
              className="checkbox rounded-sm"
            />
            <label htmlFor={"on-way"} className={"font-medium"}>
              On Way
            </label>
          </div>

          <div className={"flex items-center gap-x-2"}>
            <input
              type="checkbox"
              id={"multi-city"}
              className="checkbox rounded-sm"
            />
            <label htmlFor={"multi-city"} className={"font-medium"}>
              Multi-City
            </label>
          </div>

          <div className={"flex items-center gap-x-2"}>
            <input
              type="checkbox"
              id={"etihad"}
              className="checkbox rounded-sm"
            />
            <label htmlFor={"etihad"} className={"font-medium"}>
              My Dates Are Flexible
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};
