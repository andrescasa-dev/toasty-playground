import Toast, { ToastData } from "./Toast";
export type ToastWithId = ToastData & {
  id: string;
};

function ToastStack({
  stackToastData = [],
}: {
  stackToastData: ToastWithId[];
}) {
  return (
    <div className="fixed left-2 top-2">
      <div className="flex flex-col gap-2">
        {stackToastData.map((toast) => (
          <Toast key={toast.id} {...toast} />
        ))}
      </div>
    </div>
  );
}

export default ToastStack;
