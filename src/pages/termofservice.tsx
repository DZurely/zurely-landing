import "zero-md";
export default function PrivacyPolicy() {
  const markdownUrl =
    "https://raw.githubusercontent.com/DZurely/zurely-docs/refs/heads/main/terms-of-service.md";

  return (
    <div className="max-w-[800px] my-12 mx-auto px-5">
      <zero-md src={markdownUrl}>
        <template
          data-append
          dangerouslySetInnerHTML={{
            __html: `<style>
                .markdown-body { color: black; background: transparent !important; }
                .markdown-body h1 { border-bottom: 0px; }
            </style>`,
          }}
        />
      </zero-md>
    </div>
  );
}
