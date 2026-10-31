# mcp-k6-vscode-agents_loadtests-apicontagem
Exemplo de uso do MCP Server do k6 com testes de carga de uma API REST de contagem de acessos.

Arquivo **.mcp.json**:

```json
{
	"mcpServers": {
		"mcp-k6": {
			"type": "stdio",
			"command": "mcp-k6"
		}
	}
}
```
