import React from "react";

function Documentation() {
  return (
    <section className="bg-black text-white min-h-screen py-16 px-6">
      <div className="max-w-3xl mx-auto space-y-10">
        {/* Heading */}
        <h1 className="text-4xl font-extrabold tracking-tight text-white">
          Introducing UI Vault
        </h1>

        {/* Description */}
        <p className="text-gray-300 text-lg leading-relaxed">
          <span className="text-white font-semibold">UI Vault</span> is a modern
          React component library paired with a smart CLI tool that lets you
          instantly add high-quality, production-ready components to your
          project using a single command. No configuration, no boilerplate —
          just run{" "}
          <code className="bg-white/10 px-1 py-[2px] rounded">
            npx ui-vault add [component]
          </code>{" "}
          and you're good to go. Every component is styled with Tailwind CSS and
          built for rapid integration. UI Vault is perfect for developers who
          want to skip repetitive UI coding and get straight to building
          polished, responsive interfaces — fast, consistent, and built for
          modern React apps.
        </p>

        {/* Why It's Different */}
        <div>
          <h2 className="text-2xl font-bold mb-4 text-white">
            Why Choose UI Vault?
          </h2>
          <ul className="space-y-4 text-gray-300 list-disc list-inside">
            <li>
              <span className="text-white font-medium">
                One-Line Integration:
              </span>{" "}
              Instantly add any component with a single command like{" "}
              <code className="bg-white/10 px-1 py-[2px] rounded">
                npx ui-vault add lens
              </code>
              . No manual setup — just drop and go.
            </li>
            <li>
              <span className="text-white font-medium">
                Production-Ready by Default:
              </span>{" "}
              All components are clean, responsive, and styled using Tailwind
              CSS and Framer Motion — fully optimized for modern UI workflows.
            </li>
            <li>
              <span className="text-white font-medium">
                Developer-First Design:
              </span>{" "}
              UI Vault prioritizes clarity, reusability, and simplicity — making
              it easy to plug into any React project and start building
              immediately.
            </li>
            <li>
              <span className="text-white font-medium">
                Zero Config Hassle:
              </span>{" "}
              All required dependencies such as <code>react-icons</code> and{" "}
              <code>framer-motion</code> are automatically installed when you
              add a component — eliminating the need to manage packages
              manually. No need to worry about peer dependencies, mismatched
              versions, or setup conflicts — UI Vault ensures your environment
              is ready to go from the moment you run the command.
            </li>
            <li>
              <span className="text-white font-medium">
                Organized Output Structure:
              </span>{" "}
              When you run <code>npx ui-vault add [component]</code>, a
              dedicated <code>src/UIvault</code> folder is automatically created
              in your project. The selected component (e.g.,{" "}
              <code>lens.jsx</code>) is added directly inside — fully ready to
              use, with no extra wiring or configuration needed. This keeps your
              project clean, modular, and developer-friendly.
            </li>
          </ul>
        </div>

        {/* Usage Example */}
        <div className="bg-[#1a1a1a] p-5 rounded-xl font-mono text-sm whitespace-pre-wrap overflow-x-auto shadow-md leading-relaxed">
          <div>
            <span className="text-gray-500 geist-mono">
              # Run the CLI command
            </span>
            <br />
            <span className="text-yellow-400 geist-mono">npx</span>{" "}
            <span className="text-cyan-400 geist-mono">ui-vault</span>{" "}
            <span className="text-cyan-400 geist-mono">add</span>{" "}
            <span className="text-green-400 geist-mono">lens</span>
          </div>
          <br />
          <div>
            <span className="text-gray-500 geist-mono"># 📁 Output:</span>
            <br />
            <span className="text-blue-400 geist-mono">└── src/</span>
            <br />
            <span className="text-blue-400 geist-mono">
              &nbsp;&nbsp;&nbsp;&nbsp;└── UIvault/
            </span>
            <br />
            <span className="text-blue-400 geist-mono">
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└──
            </span>{" "}
            <span className="text-green-400 geist-mono">lens.jsx</span>
          </div>
          <br />
          <div>
            <span className="text-gray-500 geist-mono">
              // Now you can use it in your component
            </span>
            <br />
            <span className="text-purple-400 geist-mono">import</span>{" "}
            <span className="text-white geist-mono">Lens</span>{" "}
            <span className="text-purple-400 geist-mono">from</span>{" "}
            <span className="text-yellow-300 geist-mono">'./UIvault/lens'</span>
            ;
          </div>
          <br />
          <div>
            <span className="text-purple-400 geist-mono">export default</span>{" "}
            <span className="text-white geist-mono">function</span>{" "}
            <span className="text-blue-300 geist-mono">HomePage</span>() {"{"}
            <br />
            &nbsp;&nbsp;
            <span className="text-purple-400 geist-mono">return</span> (
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&lt;
            <span className="text-green-400 geist-mono">div</span>&gt;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;
            <span className="text-green-400 geist-mono">Lens</span> /&gt;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&lt;/
            <span className="text-green-400 geist-mono">div</span>&gt;
            <br />
            &nbsp;&nbsp;);
            <br />
            {"}"}
          </div>
        </div>

        {/* Outro */}
        <p className="text-gray-400 text-md">
          Skip boilerplate and focus on building.{" "}
          <strong className="text-white">UI Vault</strong> lets you move fast,
          with clean code and stunning UI at your fingertips — instantly.
        </p>
        <p className="text-gray-300 text-base leading-relaxed">
          <span className="text-white font-medium">
            It’s simple and effortless
          </span>{" "}
          — once you run the command, the component is automatically added to
          the{" "}
          <span className="bg-white/10 text-green-400 px-1 py-[1px] rounded">
            UIvault
          </span>{" "}
          folder. You can immediately{" "}
          <span className="text-cyan-400 font-medium">import</span> and{" "}
          <span className="text-yellow-400 font-medium">use</span> it in your
          React application without any extra configuration.
        </p>

        {/* Why We Chose React, Tailwind CSS, and Framer Motion */}
        <div className="mt-10">
          <h2 className="text-2xl font-bold mb-4 text-white">
            Why React.js, Tailwind CSS & Framer Motion?
          </h2>
          <p className="text-gray-300 text-base leading-relaxed">
            UI Vault is built on a stack that prioritizes developer experience,
            speed, and design consistency.{" "}
            <span className="text-white font-semibold">React.js</span> was
            chosen as the foundation because of its component-based
            architecture, declarative UI syntax, and massive ecosystem — making
            it ideal for building reusable components that can be dropped into
            any modern web app.
            <br />
            <br />
            <span className="text-white font-semibold">Tailwind CSS</span>{" "}
            allows us to craft fully responsive, accessible, and elegant UI
            components without writing custom CSS. Its utility-first approach
            drastically speeds up development and ensures pixel-perfect styling
            that adapts easily across screen sizes.
            <br />
            <br />
            We also integrated{" "}
            <span className="text-white font-semibold">Framer Motion</span> to
            bring seamless animations and transitions to life. It's intuitive,
            performant, and works beautifully with React — letting us animate
            complex interactions with minimal code.
            <br />
            <br />
            Together, this trio delivers blazing-fast UI development, stunning
            visuals, and maximum reusability. Every decision in UI Vault's stack
            is focused on building fast, beautiful interfaces with zero hassle.
          </p>
        </div>

        <h2 className="text-2xl font-bold mb-4 text-white">Requirements</h2>
        <p className="text-gray-300 leading-relaxed">
          Before installing UI Vault, ensure your project is set up with:
          <ul className="list-disc list-inside mt-2">
            <li>React version 18 or higher</li>
            <li>Tailwind CSS properly configured</li>
            <li>Vite or Create React App setup</li>
            <li>Node.js version 16+</li>
          </ul>
        </p>

        <h2 className="text-2xl font-bold mb-4 text-white">
          Available CLI Commands
        </h2>
        <ul className="list-disc list-inside text-gray-300 space-y-2">
          <li>
            <code className="bg-white/10 px-2 py-1 rounded">
              npx ui-vault init
            </code>{" "}
            – Add UI vault in your project
          </li>
          <li>
            <code className="bg-white/10 px-2 py-1 rounded">
              npx ui-vault add [component]
            </code>{" "}
            – Add a single component
          </li>
          
        
        </ul>

        <h2 className="text-2xl font-bold mb-4 text-white">FAQ</h2>
        <ul className="space-y-3 text-gray-300">
          <li>
            <strong className="text-white">
              Q: Does UI Vault work with CRA?
            </strong>
            <br />
            A: Yes, as long as Tailwind CSS is configured properly.
          </li>
          <li>
            <strong className="text-white">
              Q: How can I customize a component?
            </strong>
            <br />
            A: All components are editable. Just open the generated file in{" "}
            <code>src/UIvault/</code> and modify the JSX or styles as needed.
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Documentation;
