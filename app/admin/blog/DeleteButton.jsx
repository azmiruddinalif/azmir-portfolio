"use client";

export default function DeleteButton({ slug, action }) {
  return (
    <form
      action={action}
      onSubmit={(e) => {
        if (!confirm("Delete this blog post? This cannot be undone.")) {
          e.preventDefault();
        }
      }}
    >
      <input type="hidden" name="slug" value={slug} />
      <button
        type="submit"
        className="text-xs font-primary font-semibold text-red-600 dark:text-red-400 hover:underline cursor-pointer"
      >
        Delete
      </button>
    </form>
  );
}
