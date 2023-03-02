import { navigationActions } from "@/store/navigation-slice";
import { RefObject, useEffect } from "react";
import { useInViewport } from "react-in-viewport";
import { useDispatch } from "react-redux";

function useViewport(ref: RefObject<HTMLElement>) {
    const dispatch = useDispatch()
    const options = { threshold: 0.7 }
    const { inViewport } = useInViewport(ref, options);

    useEffect(() => {
        if (inViewport) {
            if (ref.current) {
                console.log(ref.current.id + " is in viewPort")
                dispatch(navigationActions.setActiveSection(ref.current.id))
            }
        }
    }, [inViewport, dispatch, ref])

}

export default useViewport