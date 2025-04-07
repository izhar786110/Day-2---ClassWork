
const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(
    <Example />
)

function Example(){
    return (
        <div className="parent">
        <h1 id="heading" >Learn web development</h1>
        <p>Welcome to MDN Learning Web Development (also known as Learn). This resource provides a structured set of tutorials teaching the essential skills and practices for being a successful front-end developer, along with challenges and further recommended resources.</p>

        <p>Designed to take you from "beginner" to "comfortable" (not "beginner" to "expert"), giving you enough knowledge to use more advanced resources  (such as <a href="https://developer.mozilla.org/en-US/">the rest of MDN</a>).</p>

        <p>If you want to get in touch with us about anything, use the <a href="https://developer.mozilla.org/en-US/docs/MDN/Community/Communication_channels">communication channels</a>. We'd love to hear from you about anything you think is wrong or missing on the site, requests for new learning topics, requests for help with items you don't understand, or any other questions or concerns.</p>

        </div>

        
    )
}