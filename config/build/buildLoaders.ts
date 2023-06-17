import { BuildOptions } from "./types/config";
import { buildCssLoader } from "./loaders/buildCssLoader";
import { buildBabelLoader } from "./loaders/buildBabelLoader";

export function buildLoaders(options: BuildOptions) {

    const styleLoader = buildCssLoader(options.isDev);

    const codeBabelLoader = buildBabelLoader({ ...options, isTSX: false });
    const tsxCodeBabelLoader = buildBabelLoader({ ...options, isTSX: true });

    return [
        codeBabelLoader,
        tsxCodeBabelLoader,
        styleLoader
    ];
}