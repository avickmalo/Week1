import Head from "next/head";
export default function Index() {
    return (
        <>
            <head>
                <title> Clocky</title>
                <meta name = "description" content = "track/"></meta>
            </head>
           
           
            <h1> Clocky </h1>
            <h3> Your Personal Timekeeper</h3>
                <div id = "display">
                    <h2> Daily</h2>
                    <p>
                        Total elapsed time:
                        Past 12 hours:
                    </p>
                    <h2> Weekly</h2>
                    <p>
                        Total elapsed time:
                        Past 12 hours:
                    </p>
                    <h2> Categories </h2>
                    <h2> Limits </h2>
                   
                    
                </div>



            
        </>
    );
}
