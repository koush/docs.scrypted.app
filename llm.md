# Large Language Models

Scrypted supports integrating with large language models running in the cloud or locally.

## LLM Plugin

Install the LLM plugin in Scrypted to get started. then click `Add New` to add a cloud or local large language model.

## Cloud Provider

The LLM Plugin supports ChatGPT, Claude, and Gemini. You will need to bring your own API key, which requires setting up a billing account or pay as you go account with the provider. Choose the provider and enter the key.

The following models are recommended for price and performance considerations:

| Provider | Model |
|----------|-------|
| OpenAI | `gpt-4o-mini` |
| Anthropic | `claude-3-haiku` |
| Gemini | `gemini-1.5-flash` |

## Local Model

::: warning
Ollama and LM Studio do not provide fully compliant OpenAI endpoints and may not work correctly. Using the LLM Plugin hosted llama.cpp is preferred. vLLM and SGLang are also recommended.
:::

Local models will require capable hardware:

* Apple Silicon (16GB RAM)
* NVIDIA GPU (12GB RAM)
* AMD GPU (12GB RAM)
* AMD AI MAX

::: tip
Models can be run in [Cluster Mode](/maintenance/cluster.md) and and offloaded to a GPU running on another machine or a Mac.
:::

Local models are hosted using [llama.cpp](https://github.com/ggerganov/llama.cpp). The LLM plugin will install llama.cpp automatically when a new model is added to Scrypted.

The model the server can run is dependent on how much VRAM is available on the system.

| Model | Min VRAM | Model ID |
|-------|----------|------------------|
| Qwen3.5-4B | 5 GB | `unsloth/Qwen3.5-4B-GGUF` |
| Qwen3.5-9B | 8 GB | `unsloth/Qwen3.5-9B-GGUF` |
| Gemma 4 E4B | 8 GB | `unsloth/gemma-4-E4B-it-GGUF` |
| Qwen3.5-27B | 20 GB | `unsloth/Qwen3.5-27B-GGUF` |
| Gemma 4 26B-A4B | 21 GB | `unsloth/gemma-4-26B-A4B-it-GGUF` |
| Gemma 4 31B | 24 GB | `unsloth/gemma-4-31B-it-GGUF` |
| Qwen3.5-35B-A3B | 26 GB | `unsloth/Qwen3.5-35B-A3B-GGUF` |

Larger models generally provide better results, but have diminishing returns.

::: warning
Selecting a model that is too large for the available memory will cause system instability.
:::