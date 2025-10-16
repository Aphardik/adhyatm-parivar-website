// /pages/form/page.jsx
import { Suspense } from 'react';
import DynamicForm from '@/app/_components/FormPageContainer'; 
import FormSkeleton from "@/app/_components/FormSkeleton";

function FormPageContent() {
  return <DynamicForm />;
}

export default function FormPage() {
  return (
    <Suspense fallback={<FormSkeleton />}>
      <FormPageContent />
    </Suspense>
  );
}