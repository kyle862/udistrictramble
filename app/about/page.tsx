export default function About() {
  return (
    <>
      <div className="mt-8 mb-80 text-stone-900">
        <div className="max-w-4xl">
          <h1 className="text-9xl mb-24 font-sarina text-stone-900 max-w-lg">
            About the Ramble
          </h1>
          <p className="mb-4">
            The images were captured on opening day of boating season 2025 in
            and around the University District in Seattle using a Canon
            PowerShot ELPH 130 IS.
          </p>
          <p className="mb-4">All images © 2025 Kyle Wendt</p>
          <p className="mb-4">
            This site was created using Next.js and Tailwind CSS and
            demonstrates applied learning of the following concepts:
          </p>
          <h3 className="text-3xl mt-12 font-sarina text-stone-900 max-w-lg">
            React
          </h3>
          <ul className="list-disc list-inside">
            <li>Creating a React app from the terminal</li>
            <li>
              Creating, exporting, and importing React components and component
              references
            </li>
            <li>
              Creating, exporting, and importing local and external data
              endpoints
            </li>
            <li>
              Using endpoint-imported data to populate content dynamically
            </li>
          </ul>
          <h3 className="text-3xl mt-12 font-sarina text-stone-900 max-w-lg">
            Next.js
          </h3>
          <ul className="list-disc list-inside">
            <li>Creating a Next.js app from the terminal</li>
            <li>
              Basic routing structure of a Next.js app (e.g., 'public' folder
              and './page-name/page.tsx' routing structure )
            </li>
          </ul>
          <h3 className="text-3xl mt-12 font-sarina text-stone-900 max-w-lg">
            Tailwind CSS
          </h3>
          <ul className="list-disc list-inside">
            <li>Terminal installation</li>
            <li>Basic concepts</li>
            <li>VS Code Tailwind Intellisense extension</li>
            <li>
              Linking web fonts from external sources (e.g., Google Fonts)
            </li>
            <li>Creating and managing custom styles with '@Theme'</li>
          </ul>
        </div>
      </div>
    </>
  );
}
