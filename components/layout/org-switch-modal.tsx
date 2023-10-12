import Modal from "@/components/shared/modal";
import {
    useState,
    Dispatch,
    SetStateAction,
    useCallback,
    useMemo,
} from "react";
import { LoadingDots, Google } from "@/components/shared/icons";
import Image from "next/image";

const OrgSwitchModal = ({
    showOrgSwitchModal,
    focusOrgSwitchModal,
    setShowOrgSwitchModal,
    setFocusOrgSwitchModal
}: {
    showOrgSwitchModal: boolean;
    focusOrgSwitchModal?: object;
    setShowOrgSwitchModal: Dispatch<SetStateAction<boolean>>;
    setFocusOrgSwitchModal: Dispatch<SetStateAction<object>>;
}) => {
    const [signInClicked, setSignInClicked] = useState(false);

    return (
        <Modal showModal={showOrgSwitchModal} setShowModal={setShowOrgSwitchModal}>
            <div className="w-full overflow-hidden shadow-xl md:max-w-md md:rounded-2xl md:border md:border-gray-200">
                <div className="flex flex-col items-center justify-center space-y-3 border-b border-gray-200 bg-white px-4 py-6 pt-8 text-center md:px-16">
                  
                    <p className="text-sm text-gray-500">
                        <img src={focusOrgSwitchModal?.branding?.logo_url} />
                    </p>
                    <h3 className="font-display text-2xl font-bold">Switch Org Context</h3>
                    
                    <p>Switching between organisations may require you to complete an MFA challenge or even log in again.</p>
                </div>

                <div className="flex flex-col space-y-4 bg-gray-50 px-4 py-8 md:px-16">
                    <button
                    style={{ background: focusOrgSwitchModal?.branding?.colors?.primary }}
                        disabled={signInClicked}
                        className={`${signInClicked
                                ? "cursor-not-allowed border-gray-200 bg-gray-100"
                                : "border border-gray-200 bg-white text-white hover:bg-gray-50"
                            } flex h-10 w-full items-center justify-center space-x-3 rounded-md border text-sm shadow-sm transition-all duration-75 focus:outline-none`}
                        onClick={() => {
                            setSignInClicked(true);
                            window.location.href = "/dashboard";
                        }}
                    >
                        {signInClicked ? (
                            <LoadingDots color="#808080" />
                        ) : (
                            <>
                                <p >continue with {focusOrgSwitchModal?.display_name}</p>
                            </>
                        )}
                    </button>
                </div>
            </div>
        </Modal>
    );
};

export function useOrgSwitchModal() {
    const [showOrgSwitchModal, setShowOrgSwitchModal] = useState(false);
    const [focusOrgSwitchModal, setFocusOrgSwitchModal] = useState({});

    const OrgSwitchModalCallback = useCallback(() => {
        return (
            <OrgSwitchModal
                showOrgSwitchModal={showOrgSwitchModal}
                focusOrgSwitchModal={focusOrgSwitchModal}
                setShowOrgSwitchModal={setShowOrgSwitchModal}
                setFocusOrgSwitchModal={setFocusOrgSwitchModal}
            />
        );
    }, [showOrgSwitchModal, focusOrgSwitchModal, setShowOrgSwitchModal, setFocusOrgSwitchModal]);

    return useMemo(
        () => ({ setShowOrgSwitchModal, OrgSwitchModal: OrgSwitchModalCallback, setFocusOrgSwitchModal }),
        [setShowOrgSwitchModal, setFocusOrgSwitchModal, OrgSwitchModalCallback],
    );
}
