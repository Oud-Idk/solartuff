import SimpleMarkdown from './SimpleMarkdown';

interface ProductSpec {
    label: string;
    value: string;
}

interface Product {
    model: string;
    specs: ProductSpec[];
}

interface ProductComparisonProps {
    header: string;
    products: Product[];
    listContent: string;
}

export default function ProductComparison({ header, products, listContent }: ProductComparisonProps) {
    const specLabels = products[0]?.specs.map((s) => s.label) ?? [];

    return (
        <>
            <SimpleMarkdown content={header} />

            {/* Mobile: list layout */}
            <div className="lg:hidden">
                <SimpleMarkdown content={listContent} />
            </div>

            {/* Desktop: table layout */}
            <div className="hidden lg:block">
                <div className="my-6 overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                        <thead className="bg-surface">
                            <tr>
                                <th className="px-4 py-3 text-sm font-bold border uppercase tracking-wider text-text border-border">
                                    Specification
                                </th>
                                {products.map((product) => (
                                    <th
                                        key={product.model}
                                        className="px-4 py-3 text-sm font-bold border uppercase tracking-wider text-text border-border"
                                    >
                                        {product.model}
                                    </th>
                                ))}
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-border">
                            {specLabels.map((label, rowIndex) => (
                                <tr key={label} className="hover:bg-surface-hover transition-colors">
                                    <td className="px-4 py-3 text-sm font-semibold border text-text border-border">
                                        {label}
                                    </td>
                                    {products.map((product) => (
                                        <td
                                            key={product.model}
                                            className="px-4 py-3 text-sm border text-text border-border"
                                        >
                                            {product.specs[rowIndex]?.value ?? '—'}
                                        </td>
                                    ))}
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
}
