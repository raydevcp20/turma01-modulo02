## ✅ Checklist para decidir quando usar: signal, computed ou effect;

| Pergunta                                                             | Use                                                         |
| -------------------------------------------------------------------- | ----------------------------------------------------------- |
| Preciso **armazenar um valor que muda com o tempo** (estado local)?  | `✅ signal()`                                                |
| Preciso **calcular um novo valor** com base em outros signals?       | `✅ computed()`                                              |
| Preciso **executar uma ação (efeito colateral)** quando algo mudar?  | `✅ effect()`                                                |
| Preciso **chamar uma API, logar, ou navegar** quando um signal muda? | `✅ effect()`                                                |
| Preciso **derivar uma lista filtrada, soma, ou valor calculado**?    | `✅ computed()`                                              |
| Preciso **modificar um signal diretamente**?                         | `✅ signal()` com `.set()` ou `.update()`                    |
| Quero **observar mudanças mas não retornar nada**?                   | `✅ effect()`                                                |
| Preciso usar o valor num template HTML (`{{ ... }}`)?                | `✅ signal()` ou `computed()` (usando `()`)                  |
| Estou tentando **evitar chamadas desnecessárias no HTML**?           | `✅ computed()` ou `signal()` (evite `effect()` no template) |


## 🧠 Tabela comparativa: signal() vs computed() vs effect()

| Característica       | `signal()`                      | `computed()`      | `effect()`                               |
| -------------------- | ------------------------------- | ----------------- | ---------------------------------------- |
| Guarda valor mutável | ✅ Sim                           | ❌ Não             | ❌ Não                                    |
| Permite leitura      | ✅ `.()`                         | ✅ `.()`           | ❌ (não retorna valor)                    |
| Permite escrita      | ✅ `.set()` / `.update()`        | ❌ Não             | ✅ Pode escrever em signals (com cuidado) |
| Reage a mudanças     | ❌ Depende de uso com `effect()` | ✅ Automaticamente | ✅ Automaticamente                        |
| Serve para templates | ✅ Sim                           | ✅ Sim             | ❌ Não                                    |
| Ideal para derivar   | ❌                               | ✅                 | ❌                                        |
| Ideal para efeitos   | ❌                               | ❌                 | ✅                                        |
| Seguro de usar       | ✅ Sim                           | ✅ Muito seguro    | ⚠️ Cuidado com loops/efeitos indesejados |
