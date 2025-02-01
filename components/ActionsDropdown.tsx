"use client";

import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import { Models } from "node-appwrite";
import { actionsDropdownItems } from "@/constants";
import Link from "next/link";
import { constructDownloadUrl } from "@/lib/utils";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  deleteFile,
  renameFile,
  updateFileUsers,
} from "@/lib/actions/file.actions";
import { usePathname, useRouter } from "next/navigation";
import { FileDetails, ShareInput } from "./ActionsModalContent";

const ActionDropdown = ({ file }: { file: Models.Document }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [action, setAction] = useState<ActionType | null>(null);
  const [name, setName] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [emails, setEmails] = useState<string[]>([]);

  const path = usePathname();
  const router = useRouter();

  // Initialize name when file prop changes
  useEffect(() => {
    setName(file.name);
  }, [file.name]);

  const closeAllModals = useCallback(() => {
    setIsModalOpen(false);
    setIsDropdownOpen(false);
    setAction(null);
    setName(file.name);
    setEmails([]);
    setIsLoading(false);
  }, [file.name]);

  const handleAction = useCallback(async () => {
    if (!action) return;
    setIsLoading(true);

    try {
      let success = false;
      
      switch (action.value) {
        case 'rename':
          success = await renameFile({ 
            fileId: file.$id, 
            name, 
            extension: file.extension, 
            path 
          });
          break;
        case 'share':
          success = await updateFileUsers({ 
            fileId: file.$id, 
            emails, 
            path 
          });
          break;
        case 'delete':
          success = await deleteFile({ 
            fileId: file.$id, 
            bucketFileId: file.bucketFileId, 
            path 
          });
          break;
      }

      if (success) {
        closeAllModals();
        router.refresh();
      }
    } catch (error) {
      console.error("Error executing action:", error);
    } finally {
      setIsLoading(false);
    }
  }, [action, name, emails, file, path, router, closeAllModals]);

  const handleModalChange = useCallback((open: boolean) => {
    if (!open) {
      closeAllModals();
    } else {
      setIsModalOpen(open);
    }
  }, [closeAllModals]);

  const dialogDescription = action ? `${action.label} dialog for ${file.name}` : "";

  return (
    <Dialog open={isModalOpen} onOpenChange={handleModalChange}>
      <DropdownMenu open={isDropdownOpen} onOpenChange={setIsDropdownOpen}>
        <DropdownMenuTrigger className="shad-no-focus">
          <Image
            src="/assets/icons/dots.svg"
            alt="dots"
            width={34}
            height={34}
          />
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuLabel className="max-w-[200px] truncate">
            {file.name}
          </DropdownMenuLabel>
          <DropdownMenuSeparator />
          {actionsDropdownItems.map((actionItem) => (
            <DropdownMenuItem
              key={actionItem.value}
              className="shad-dropdown-item"
              onClick={() => {
                setAction(actionItem);
                if (["rename", "share", "delete", "details"].includes(actionItem.value)) {
                  setIsModalOpen(true);
                }
              }}
            >
              {actionItem.value === "download" ? (
                <Link
                  href={constructDownloadUrl(file.bucketFileId)}
                  download={file.name}
                  className="flex items-center gap-2"
                >
                  <Image
                    src={actionItem.icon}
                    alt={actionItem.label}
                    width={30}
                    height={30}
                  />
                  {actionItem.label}
                </Link>
              ) : (
                <div className="flex items-center gap-2">
                  <Image
                    src={actionItem.icon}
                    alt={actionItem.label}
                    width={30}
                    height={30}
                  />
                  {actionItem.label}
                </div>
              )}
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>

      {action && (
        <DialogContent className="shad-dialog">
          <DialogHeader className="flex flex-col gap-3">
            <DialogTitle className="text-center text-light-100">
              {action.label}
            </DialogTitle>
            <DialogDescription className="sr-only">
              {dialogDescription}
            </DialogDescription>
            
            {action.value === "rename" && (
              <Input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                aria-label="Rename file"
              />
            )}
            {action.value === "details" && <FileDetails file={file} />}
            {action.value === "share" && (
              <ShareInput
                file={file}
                onInputChange={setEmails}
                onRemove={async (email) => {
                  const updatedEmails = emails.filter((e) => e !== email);
                  const success = await updateFileUsers({
                    fileId: file.$id,
                    emails: updatedEmails,
                    path,
                  });
                  if (success) {
                    setEmails(updatedEmails);
                    router.refresh();
                  }
                }}
              />
            )}
            {action.value === "delete" && (
              <p className="delete-confirmation">
                Are you sure you want to delete{` `}
                <span className="delete-file-name">{file.name}</span>?
              </p>
            )}
          </DialogHeader>
          {["rename", "delete", "share"].includes(action.value) && (
            <DialogFooter className="flex flex-col gap-3 md:flex-row">
              <Button 
                onClick={closeAllModals} 
                className="modal-cancel-button"
                type="button"
              >
                Cancel
              </Button>
              <Button 
                onClick={handleAction} 
                className="modal-submit-button"
                disabled={isLoading}
                type="button"
              >
                <p className="capitalize">{action.value}</p>
                {isLoading && (
                  <Image
                    src="/assets/icons/loader.svg"
                    alt="loader"
                    width={24}
                    height={24}
                    className="animate-spin ml-2"
                  />
                )}
              </Button>
            </DialogFooter>
          )}
        </DialogContent>
      )}
    </Dialog>
  );
};

export default ActionDropdown;
