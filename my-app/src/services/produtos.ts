import type { Produto } from '../types/produto'

export async function buscarProdutos(signal?: AbortSignal,): Promise<Produto[]> {

    const resposta = await fetch('/data/produtos.json', { signal })

    if (!resposta.ok) {
        throw new Error(
            `Não foi possível carregar (${resposta.status}).`,
        )
    }

    return (await resposta.json()) as Produto[]
}

export async function buscarProdutoPorId(id: number, signal?: AbortSignal,): Promise<Produto | undefined> {
    const produtos = await buscarProdutos(signal)
    return produtos.find((produto) => produto.id === id)
}