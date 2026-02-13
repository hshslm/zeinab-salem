export default function Footer(): React.ReactElement {
  return (
    <div className="mt-auto">
      <div className="mt-24 border-t border-border" />
      <footer className="py-4 text-xs text-subtle/50 text-center">
        <span>&copy; {new Date().getFullYear()} Zeinab Salem</span>
      </footer>
    </div>
  );
}
