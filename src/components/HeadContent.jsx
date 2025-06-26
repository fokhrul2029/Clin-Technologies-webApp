import LogoShape from "./LogoShape";

function HeadContent({ title, content }) {
  return (
    <div class="flex flex-col items-center">
      <LogoShape />
      <h2 class="text-3xl font-bold text-gray-900">{title}</h2>
      <p class="mt-2 text-sm text-gray-600">{content}</p>
    </div>
  );
}

export default HeadContent;
