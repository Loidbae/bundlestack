import { FunctionComponent, useState } from "react";
import { MinecraftBundle } from "../atoms/minecraftBundle";
import { BundleWithIcon } from "./bundleWithIcon";
import { MinecraftCommandBlock } from "../atoms/minecraftCommandBlock";

export const Logo: FunctionComponent = () => {
    const [changeSVG, setChangeSVG] = useState<boolean>(true);

    return(
        <a
            className="font-minecraft flex flex-row justify-center items-center gap-2 cursor-pointer"
            onMouseOver={()=> setChangeSVG(false)}
            onMouseLeave={()=> setChangeSVG(true)}
        >
            {changeSVG ? (
                <MinecraftBundle size={50}/>
            ):(
                <BundleWithIcon child={
                    <MinecraftCommandBlock
                        size={40}
                        className="absolute bottom-2 left-1 rounded-md"
                    />
                }/>
            )}

            <div className="flex flex-row justify-end items-end text-4xl h-12.5">
                <div className="text-secondary">Bundle</div>
                <div className="text-primary">stack</div>
            </div>
        </a>
    );
}