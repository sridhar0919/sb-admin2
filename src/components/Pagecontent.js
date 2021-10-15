import React from 'react';

const icons = (values) => {
  switch (values) {
    case 'Earnings(Monthly)':
      return (
        <div className="col-auto mr-2">
          <i className="fas fa-calendar fa-2x text-gray-300"></i>
        </div>
      );
    case 'Earnings(Annual)':
      return (
        <div class="col-auto mr-2">
          <i class="fas fa-dollar-sign fa-2x text-gray-300"></i>
        </div>
      );
    case 'Tasks':
      return (
        <>
          <div class="col">
            <div class="progress progress-sm mr-2">
              <div
                class="progress-bar bg-info"
                role="progressbar"
                style={{ width: '50%' }}
                aria-valuenow="50"
                aria-valuemin="0"
                aria-valuemax="100"
              ></div>
            </div>
          </div>
          <div class="col-auto mr-2">
            <i class="fas fa-clipboard-list fa-2x text-gray-300"></i>
          </div>
        </>
      );
    case 'Pending requests':
      return (
        <div class="col-auto mr-2">
          <i class="fas fa-comments fa-2x text-gray-300"></i>
        </div>
      );
  }
};

const progressBar = (value) => {
  if (value === 'Tasks') {
    return (
      <div class="col">
        <div class="progress progress-sm mr-2">
          <div
            class="progress-bar bg-info"
            role="progressbar"
            style={{ width: '50%' }}
            aria-valuenow="50"
            aria-valuemin="0"
            aria-valuemax="100"
          ></div>
        </div>
      </div>
    );
  }
};

export default function Pagecontent({ dboardItems }) {
  return (
    <div className="container-fluid">
      {/* <!-- Page Heading --> */}
      <div className="d-sm-flex align-items-center justify-content-between mb-4">
        <h1 className="h3 mb-0 text-gray-800">Dashboard</h1>
        <a
          href="#"
          className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"
        >
          <i className="fas fa-download fa-sm text-white-50"></i> Generate
          Report
        </a>
      </div>
      <div className="row">
        {/* <!-- Content Row --> */}
        {dboardItems.map((item, index) => {
          return (
            <div className="col-xl-3 col-md-6 mb-4">
              <div className="card border-left-primary shadow h-100 py-2">
                <div className="card-body">
                  <div className="row no-gutters align-items-center">
                    <div className="col">
                      <div className="text-xs font-weight-bold text-primary text-uppercase mb-1 ml-2">
                        {item.title}
                      </div>
                      <div className="h5 mb-0 font-weight-bold text-gray-800 ml-2">
                        {item.value}
                      </div>
                      {/* {progressBar(item.title)} */}
                    </div>
                    {icons(item.title)}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
