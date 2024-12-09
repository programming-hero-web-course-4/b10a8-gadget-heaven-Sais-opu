const BannerU = ({ buttons = [], backgroundColor = "bg-[#9538E2]", className = "" }) => {
    return (
        <div className={`text-center ${backgroundColor} ${className}`}>
            <h1 className="text-5xl font-bold mt-28 mb-4 pt-10">
                ksdjhfjiahfah
            </h1>
            <p>
                hfuygygiuguihoughofhguoshguoi <br />
                iahflahdflkjasld <br />
                afsf;lsd;fka;sdlk
            </p>
            <div className="flex justify-center btn btn-outline gap-4 mt-3 mb-14">
                <button>shop NOw</button>
            </div>
        </div>
    );
};

export default BannerU;
