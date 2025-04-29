# ComfyUI Mouse Shortcuts

A collection of browser userscripts that add convenient mouse shortcuts to ComfyUI.

## Features

### Middle-Click to Run Inference
- **Description**: Triggers the "Run" button when middle-clicking anywhere in the ComfyUI interface
- **Compatibility**: Works with RunPod instances and local ComfyUI installations
- **Installation**: [Install script](./tm_middle_click_run.js)

## Installation

1. Install the [Tampermonkey](https://www.tampermonkey.net/) browser extension
2. Add the tm_middle_click_run.js script in user scripts in Tamperonkey.
3. If the script is enabled - you should see a badge for number of scripts running in the background. If this does not show up, something's wrong.

## Supported Environments
Currently supported 
- RunPod ComfyUI instances (`*.proxy.runpod.net`)
- Local ComfyUI installations (`localhost:8188`)

This can be extended very easily. Please create a PR if you want to add a source.

## Contributing

Feel free to contribute additional mouse shortcuts or improvements by creating a pull request.

## Planned Features

- Additional mouse shortcuts for common ComfyUI operations
- Customizable shortcut configurations
- Support for more environments and setups

## License

This project is open source and available under the MIT License.