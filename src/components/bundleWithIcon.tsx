import { FunctionComponent } from "react";
import { BundleWithIconProps } from "../types/bundleWithIconProps";
import { MinecraftBundleOpenTop } from "../atoms/minecraftBundleOpenTop";
import { MinecraftBundleOpenBottom } from "../atoms/minecraftBundleOpenBottom";

export const BundleWithIcon: FunctionComponent<BundleWithIconProps> = ({child}) => {

    return (
        <div className="relative h-12.5 w-12.5">
            <MinecraftBundleOpenTop size={50} className="absolute bottom-1 -z-10"/>
            {child}
            <MinecraftBundleOpenBottom size={50} className="absolute bottom-1 z-10"/>
        </div>
    );
}