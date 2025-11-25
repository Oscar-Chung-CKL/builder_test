import { Link } from "react-router-dom";

interface HeaderProps {
  showGroupDropdown?: boolean;
  currentGroup?: string;
}

export function Header({ showGroupDropdown = true, currentGroup = "Group 1" }: HeaderProps) {
  return (
    <header className="border-b border-border bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-24">
          <Link to="/" className="flex items-center gap-3">
            <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center">
              <svg width="28" height="33" viewBox="0 0 28 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M14 0C14 0 8 8 8 14C8 18.4 10.9 22 14 22C17.1 22 20 18.4 20 14C20 8 14 0 14 0Z" fill="#202020"/>
                <path d="M14 22C17.1 22 20 18.4 20 14C20 8 14 0 14 0M14 22C10.9 22 8 18.4 8 14C8 8 14 0 14 0M4 20C2 22 0 25 0 28C0 31 2 33 5 33C8 33 10 31 10 28C10 25 8 22 4 20Z" stroke="#202020" strokeWidth="1.5" fill="none"/>
                <path d="M24 20C26 22 28 25 28 28C28 31 26 33 23 33C20 33 18 31 18 28C18 25 20 22 24 20Z" stroke="#202020" strokeWidth="1.5" fill="none"/>
              </svg>
            </div>
            <span className="heading-sm">Space Travel Control Centre</span>
          </Link>

          {showGroupDropdown && (
            <div className="flex items-center gap-2">
              <span className="heading-sm font-bold">{currentGroup}</span>
              <svg width="24" height="24" viewBox="0 0 16 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M8 9.29132H7.99993C7.63547 9.2913 7.29763 9.11009 7.09618 8.80656L0.0381483 0.607694C-0.0316821 0.502457 -0.00294993 0.360533 0.10231 0.290749L0.196278 0.228461C0.827334 -0.189812 1.67796 -0.017625 2.09665 0.613157L8 7.07246L13.9034 0.613157C14.322 -0.017625 15.1727 -0.189812 15.8037 0.228461L15.8977 0.290749C16.003 0.360533 16.0317 0.502457 15.9619 0.607694L8.9038 8.80663C8.7023 9.11013 8.36444 9.29132 8 9.29132Z" fill="white"/>
              </svg>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
