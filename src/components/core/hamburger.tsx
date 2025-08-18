import { JSX, MouseEventHandler } from "react";

type HamburgerProps = {
    isOpen: boolean,
    onClick: () => void,
}

const HamburgerMenu = ({
    isOpen,
    onClick
}: HamburgerProps): JSX.Element => {
    return (
        <div className="justify-self-end hover:scale-[1.03] hover:shadow-elev-400 focus-visible:scale-[1.03]">
            <button
                type="button"
                onClick={onClick}
                className="lg:hidden justify-self-end inline-grid place-items-center h-16 w-16 rounded-lg bg-primary shadow-elev-200 hover:shadow-elev-300"
                aria-label={ isOpen ? "Close menu" : "Open menu" }
                aria-expanded={isOpen}
                aria-controls="mobile-menu"
            >
                {/* simple menu toggle, icon changes with state */}
                <span className="relative inline-block h-8 w-8">
                    {/* menu is closed */}
                    {!isOpen && (
                        <>
                            <span className="absolute inset-x-0 top-0 h-[2px] bg-black" />
                            <span className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-[2px] bg-black" />
                            <span className="absolute inset-x-0 bottom-0 h-[2px] bg-black" />
                        </>
                    )}
                    
                    {/* menu is isOpen */}
                    {isOpen && (
                        <>
                            <span className="relative inline-block h-8 w-8">
                                <span className="absolute inset-x-0 top-1/2 -translate-y-1/2 rotate-45 h-[2px] bg-black" />
                                <span className="absolute inset-x-0 top-1/2 -translate-y-1/2 -rotate-45 h-[2px] bg-black" />
                            </span>
                        </>
                    )}
                </span>
            </button>
        </div>
    );
};

export default HamburgerMenu