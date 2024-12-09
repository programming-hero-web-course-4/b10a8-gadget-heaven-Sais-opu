const BannerU = ({ buttons = [], backgroundColor = "bg-[#9538E2]", className = "" }) => {
    return (
        <div className={`text-center ${backgroundColor} ${className}`}>
            <h1 className="text-5xl font-bold mt-28 mb-4 pt-10">
            Upgrade Your Tech Accessorize with <br /> Gadget Heaven Accessories
            </h1>
            <p>
            Explore the latest gadgets that will take your experience to the next level. From smart devices to <br /> the coolest accessories, we have it all!
            </p>
            <div className="flex justify-center btn btn-outline gap-4 mt-3 mb-14">
                <button>shop NOw</button>
            </div>
        </div>
    );
};

export default BannerU;
