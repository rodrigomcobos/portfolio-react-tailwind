import React from 'react';
import { LinkPreview } from '@dhaiwat10/react-link-preview';
import LinkPreviewImg from '../assets/linkpreview.png';

const CustomLinkPreview = ({ url }) => {
    return (
        <div className="w-full max-w-2xl mx-auto">
            <LinkPreview
                url={url}
                width="100%"
                className="rounded-lg overflow-hidden shadow-lg"
                backgroundColor="#ffffff"
                primaryTextColor="#1e293b" // slate-800
                secondaryTextColor="#64748b" // slate-500
                imageHeight={200}
                showLoader={true}
                fallbackImageSrc={LinkPreviewImg} // Added fallback image
                customLoader={
                    <div className="animate-pulse flex space-x-4 p-4">
                        <div className="flex-1 space-y-4 py-1">
                            <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                            <div className="space-y-2">
                                <div className="h-4 bg-gray-200 rounded"></div>
                                <div className="h-4 bg-gray-200 rounded w-5/6"></div>
                            </div>
                        </div>
                    </div>
                }
                descriptionLength={180}
                borderColor="#e2e8f0" // slate-200
            />
        </div>
    );
};

export default CustomLinkPreview;