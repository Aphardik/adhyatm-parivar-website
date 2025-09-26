const FormSkeleton = () => {
  return (
    <div className="max-h-[70rem] flex items-center justify-center flex-col bg-gray-50">
      {/* Header Skeleton */}
      <div className="bg-white my-6 mx-auto shadow-sm border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="h-6 bg-slate-300 animate-pulse rounded w-48"></div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2  min-h-screen">
          
          {/* Left Side - Image Skeleton */}
          <div className="bg-slate-200 relative overflow-hidden">
            {/* Image Placeholder */}
            {/* <div className="absolute inset-0 bg-slate-200/50"></div> */}
            <div className="relative h-full flex items-center justify-center">
              <div className="text-center space-y-4 p-8">
                {/* Title Skeleton */}
                {/* <div className="space-y-3">
                  <div className="h-12 bg-slate-300 animate-pulse rounded w-64 mx-auto"></div>
                  <div className="h-8 bg-slate-300 animate-pulse rounded w-48 mx-auto"></div>
                </div> */}
                
                {/* Figure Silhouette Skeleton */}
                <div className="mt-16">
                  {/* <div className="w-32 h-48 bg-slate-400 animate-pulse rounded-full mx-auto"></div> */}
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Form Skeleton */}
          <div className="bg-gray-100 p-8 lg:p-12">
            <div className="max-w-md mx-auto space-y-6">
              
              {/* Form Fields Grid - Row 1 */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* First Name Field */}
                                  <div className="space-y-2">
                  <div className="flex items-center gap-6">
                    <div className="w-2 h-2 bg-slate-400 rounded-full"></div>
                    <div className="h-4 bg-slate-300 animate-pulse rounded w-16"></div>
                  </div>
                  <div className="h-12 bg-slate-50 animate-pulse rounded-md border border-slate-200"></div>
                </div>

                {/* Last Name Field */}
                <div className="space-y-2">
                  <div className="flex items-center gap-1">
                    <div className="w-2 h-2 bg-slate-400 rounded-full"></div>
                    <div className="h-4 bg-slate-300 animate-pulse rounded w-20"></div>
                  </div>
                  <div className="h-12 bg-slate-50 animate-pulse rounded-md border border-slate-200"></div>
                </div>
              </div>

              {/* Form Fields Grid - Row 2 */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Mobile Number Field */}
                <div className="space-y-2">
                  <div className="flex items-center gap-1">
                    <div className="w-2 h-2 bg-slate-400 rounded-full"></div>
                    <div className="h-4 bg-slate-300 animate-pulse rounded w-24"></div>
                  </div>
                  <div className="h-12 bg-slate-50 animate-pulse rounded-md border border-slate-200"></div>
                </div>

                {/* Pin Code Field */}
                <div className="space-y-2">
                  <div className="flex items-center gap-1">
                    <div className="w-2 h-2 bg-slate-400 rounded-full"></div>
                    <div className="h-4 bg-slate-300 animate-pulse rounded w-18"></div>
                  </div>
                  <div className="h-12 bg-slate-50 animate-pulse rounded-md border border-slate-200"></div>
                </div>
              </div>

              {/* Form Fields Grid - Row 3 */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* State Dropdown */}
                <div className="space-y-2">
                  <div className="flex items-center gap-1">
                    <div className="w-2 h-2 bg-slate-400 rounded-full"></div>
                    <div className="h-4 bg-slate-300 animate-pulse rounded w-16"></div>
                  </div>
                  <div className="h-12 bg-slate-50 animate-pulse rounded-md border border-slate-200 flex items-center justify-between px-3">
                    <div className="h-4 bg-slate-300 animate-pulse rounded w-20"></div>
                    <div className="w-4 h-4 bg-slate-300 animate-pulse rounded"></div>
                  </div>
                </div>

                {/* City Field */}
                <div className="space-y-2">
                  <div className="flex items-center gap-1">
                    <div className="w-2 h-2 bg-slate-400 rounded-full"></div>
                    <div className="h-4 bg-slate-300 animate-pulse rounded w-12"></div>
                  </div>
                  <div className="h-12 bg-slate-50 animate-pulse rounded-md border border-slate-200 flex items-center justify-between px-3">
                    <div className="h-4 bg-slate-300 animate-pulse rounded w-16"></div>
                    <div className="w-4 h-4 bg-slate-300 animate-pulse rounded"></div>
                  </div>
                </div>
              </div>

              {/* Address Textarea */}
              <div className="space-y-2">
                <div className="flex items-center gap-1">
                  <div className="w-2 h-2 bg-slate-400 rounded-full"></div>
                  <div className="h-4 bg-slate-300 animate-pulse rounded w-20"></div>
                </div>
                <div className="h-24 bg-slate-50 animate-pulse rounded-md border border-slate-200"></div>
              </div>

              {/* Question with Counter */}
              <div className="space-y-4">
                <div className="h-5 bg-slate-300 animate-pulse rounded w-80"></div>
                
                {/* Counter Section */}
                <div className="flex items-center justify-center gap-6">
                  <div className="w-10 h-10 bg-slate-200 animate-pulse rounded border border-slate-300"></div>
                  <div className="w-16 h-12 bg-slate-50 animate-pulse rounded border border-slate-300 flex items-center justify-center">
                    <div className="h-6 bg-slate-300 animate-pulse rounded w-4"></div>
                  </div>
                  <div className="w-10 h-10 bg-slate-200 animate-pulse rounded border border-slate-300"></div>
                </div>
              </div>

              {/* Submit Button */}
              <div className="pt-4">
                <div className="h-12 bg-slate-200 animate-pulse rounded-md w-full"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormSkeleton;