const LiveTab = () => {
  return (
 <div class="w-100">
  <div class="border border-2 border-opacity-60 rounded h-100 overflow-hidden">
    <div class="d-flex justify-content-between align-items-center p-4">
   
      <div class="d-flex flex-column">
        <h2 class="h5 font-weight-bold">Zoz Caffe</h2>
        <p class="text-muted small">A small Single Page Application built for a coffe shop in Arad, Romania.</p>
        <div class="mt-2 d-flex flex-wrap gap-2">
       
          <span class="badge bg-secondary">Preact</span>
          <span class="badge bg-secondary">HTML&CSS</span>
          <span class="badge bg-secondary">Bootstrap</span>
        </div>
      </div>

   
      <div class="flex-shrink-0">
        <a href="https://yourprojectlink.com" target="_blank" rel="noopener noreferrer" class="text-secondary">
          <i class="fas fa-external-link-alt fa-lg"></i>
        </a>
      </div>
    </div>
  </div>
</div>

  );
};

export default LiveTab;
