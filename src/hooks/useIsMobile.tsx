import { useMediaQuery } from "@material-ui/core"

export const useIsMobile = () => useMediaQuery("(max-width:770px)")
