import { useEffect, useRef } from "react";
import { forceDirectedGraph } from "../../utils/d3/forceGraph";

const SecondChart = ({ data }) => {
    let svgRef = useRef(null)

    useEffect(() => {
        forceDirectedGraph(
            data,
            svgRef.current
        )
    },[svgRef.current])

    return <svg ref={svgRef} />
}

export default SecondChart