// dist/index.js
const core = require('@actions/core');

async function run() {
  try {
    // Print "Hello, World!" message
    const message = "Hello, World!";
    core.info(message);
    
    // Set an output variable if needed
    core.setOutput("greeting", message);
  } catch (error) {
    core.setFailed(`Action failed with error: ${error.message}`);
  }
}

run();

