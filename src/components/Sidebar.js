import React from 'react';

const icons = (values) => {
  switch (values) {
    case 'Components':
      return <i class="fas fa-fw fa-cog"></i>;
    case 'Utilities':
      return <i class="fas fa-fw fa-wrench"></i>;
    case 'Charts':
      return <i class="fas fa-fw fa-folder"></i>;
    case 'Pages':
      return <i class="fas fa-fw fa-chart-area"></i>;
    case 'Tables':
      return <i class="fas fa-fw fa-table"></i>;
    default:
      return <></>;
  }
};

export default function Sidebar({ items }) {
  return (
    <div>
      <ul
        className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion"
        id="accordionSidebar"
      >
        <a
          className="sidebar-brand d-flex align-items-center justify-content-center"
          href="index.html"
        >
          <div className="sidebar-brand-icon rotate-n-15">
            <i className="fas fa-laugh-wink"></i>
          </div>
          <div className="sidebar-brand-text mx-3">
            SB Admin <sup>2</sup>
          </div>
        </a>
        <hr className="sidebar-divider my-0" />
        <li className="nav-item active">
          <a className="nav-link" href="index.html">
            <i className="fas fa-fw fa-tachometer-alt"></i>
            <span>Dashboard</span>
          </a>
        </li>

        {items.map((item, index) => {
          return (
            <div key={index}>
              <hr className="sidebar-divider" />
              <div className="sidebar-heading">{item.title}</div>
              {item.elements.map((element, index) => {
                return (
                  <li className="nav-item" key={index}>
                    <a
                      className="nav-link collapsed"
                      href="#"
                      data-toggle="collapse"
                      data-target="#collapseTwo"
                      aria-expanded="true"
                      aria-controls="collapseTwo"
                    >
                      {icons(element)}
                      <span>{element}</span>
                    </a>
                  </li>
                );
              })}
            </div>
          );
        })}

        <hr className="sidebar-divider d-none d-md-block" />
        <div className="text-center d-none d-md-inline">
          <button
            className="rounded-circle border-0"
            id="sidebarToggle"
          ></button>
        </div>
        <div className="sidebar-card d-none d-lg-flex">
          <p className="text-center mb-2">
            <strong>SB Admin Pro</strong> is packed with premium features,
            components, and more!
          </p>
          <a
            className="btn btn-success btn-sm"
            href="https://startbootstrap.com/theme/sb-admin-pro"
          >
            Upgrade to Pro!
          </a>
        </div>
      </ul>
    </div>
  );
}
