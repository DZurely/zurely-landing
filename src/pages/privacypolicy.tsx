import 'zero-md';
export default function PrivacyPolicy() {
    const markdownUrl = "https://raw.githubusercontent.com/DZurely/zurely-docs/refs/heads/main/privacy-policy.md";

    return (
        <div style={{ maxWidth: '800px', margin: '3rem auto', padding: '20px' }}>

            <zero-md src={markdownUrl}>
                <template
                    data-append
                    dangerouslySetInnerHTML={{
                        __html: `<style>
                .markdown-body { color: black; background: transparent !important; }
                .markdown-body h1 { border-bottom: 0px; }
            </style>`
                    }}
                />
            </zero-md>

        </div>
    );
}
