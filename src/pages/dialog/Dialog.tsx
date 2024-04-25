import React, { useState } from 'react';
import './dialog.scss';
import {
  Icon,
  PrimaryButton,
  DefaultButton,
  Dialog as DialogImported,
  DialogFooter,
  DialogType,
} from '@gui/fluent-ui-allure';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { oneLight } from 'react-syntax-highlighter/dist/esm/styles/prism';

function Dialog() {
  const codeDemo =
    'import * as React from "react"; \nimport { PrimaryButton, DefaultButton, Dialog, DialogFooter } from "@gui/fluent-ui-allure"; \n \nexport const SampleBasic = () => { \n  const [isDialogClosed, setDialogClosed] = React.useState(true); \n  return ( \n   <div> \n    <DefaultButton onClick={() => setDialogClosed(false)}>Open dialog</DefaultButton> \n    <Dialog hidden={isDialogClosed} title="Email Confirm" maxWidth="480px" minWidth="480px"> \n     <div style={{ maxHeight: 100 }}> \n       <p>Do you want to send this message without a subject? If you want to send, please click Send, or you can cancel by pressing Dont send or Close.</p> \n       <p>Do you want to send this message without a subject? If you want to send, please click Send, or you can cancel by pressing Dont send or Close.</p> \n     </div> \n     <DialogFooter> \n       <DefaultButton onClick={() => setDialogClosed(true)}>Cancel</DefaultButton> \n       <PrimaryButton onClick={() => setDialogClosed(true)}>Submit</PrimaryButton> \n      </DialogFooter> \n   </Dialog>';
  const [isOpen1, setIsOpen1] = useState<null | boolean>(false);
  const [isOpen2, setIsOpen2] = useState<null | boolean>(false);
  const [isModalClosed, setModalClosed] = useState<boolean>(true);

  return (
    <div className="dialog-container">
      <div className="dialog-intro">
        <p className="intro-title">Dialog</p>
        <p className="intro-def">
          Dialogs are modal control. It is a temporary popup that requires users
          to interact with the application.
        </p>
      </div>
      <div className="dialog-when">
        <p className="when-title">Dialog</p>
        <p>
          1. It is used for confirming actions, such as delete/cancel an item,
          asking people to notice.
        </p>
        <p>
          2. The user must make some choices before the next step. When the
          error result needs the user to pay attention to, use dialog to show
          the alert.
        </p>
      </div>
      <div className="dialog-usage">
        <p className="usage-title">Basic Usage</p>
        <div className="usage-para">
          <p>Layout:</p>
          Default width: 480px, max height can be 80%x current. Browser-height.
          When the content space is full, it should begin to scroll vertically.
          You should avoid horizontal scrolling.
          <p>Header:</p>
          Provide a title on the left and keep the title as simple and intuitive
          as possible, such as “Delete” “Warning”
          <p>Button:</p>
          Includes one primary button. A secondary button is optional. Primary
          confirmation button is always placed on the right side. Write button
          labels that are specific responses to the main information in the
          title. The title “Delete this file?” could have buttons labeled
          “Delete” and “Cancel” The Esc key acts like a “Cancel” effect.
        </div>
      </div>
      <div className="demo-box">
        <div className="open-demo">
          <DefaultButton onClick={() => setModalClosed(false)}>
            Open Dialog
          </DefaultButton>
          <DialogImported
            hidden={isModalClosed}
            onDismiss={() => setModalClosed(true)}
            dialogContentProps={{
              showCloseButton: true,
              type: DialogType.close,
            }}
            title="Email Confirm"
            maxWidth="480px"
            minWidth="480px"
          >
            <div
              style={{
                overflow: 'auto',
                display: 'flex',
                flexDirection: 'column',
                gap: '10px',
                maxHeight: '150px',
              }}
            >
              <p>
                Do you want to send this message without a subject? If you want
                to send, please click 'Send', or you can cancel by pressing
                'Don't send' or 'Close'.
              </p>
              <p>
                Do you want to send this message without a subject? If you want
                to send, please click 'Send', or you can cancel by pressing
                'Don't send' or 'Close'.
              </p>
              <p>
                Do you want to send this message without a subject? If you want
                to send, please click 'Send', or you can cancel by pressing
                'Don't send' or 'Close'.
              </p>
            </div>
            <DialogFooter>
              <DefaultButton onClick={() => setModalClosed(true)}>
                Cancel
              </DefaultButton>
              <PrimaryButton onClick={() => setModalClosed(true)}>
                Submit
              </PrimaryButton>
            </DialogFooter>
          </DialogImported>
        </div>
        <div className={isOpen1 ? 'openDisplay' : 'code-demo'}>
          <SyntaxHighlighter
            language="tsx"
            style={oneLight}
            customStyle={{ padding: '10px', lineHeight: '2.5' }}
          >
            {codeDemo}
          </SyntaxHighlighter>
        </div>
        <button className="close-demo" onClick={() => setIsOpen1(!isOpen1)}>
          <span className="icon">
            {isOpen1 ? (
              <Icon iconName="fas-caret-up" />
            ) : (
              <Icon iconName="fas-code" />
            )}
          </span>
        </button>
      </div>
      <div className="dialog-confirm">
        <p className="confirm-title">Confirm</p>
        <div className="confirm-box">
          <div className="openConfirm-demo">
            <DefaultButton onClick={() => setModalClosed(false)}>
              Open Dialog
            </DefaultButton>
            <DialogImported
              hidden={isModalClosed}
              onDismiss={() => setModalClosed(true)}
              dialogContentProps={{
                showCloseButton: true,
                type: DialogType.close,
              }}
              title="Email Confirm"
              maxWidth="480px"
              minWidth="480px"
            >
              <div
                style={{
                  overflow: 'auto',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '10px',
                  maxHeight: '150px',
                }}
              >
                <p>
                  Do you want to send this message without a subject? If you
                  want to send, please click 'Send', or you can cancel by
                  pressing 'Don't send' or 'Close'.
                </p>
                <p>
                  Do you want to send this message without a subject? If you
                  want to send, please click 'Send', or you can cancel by
                  pressing 'Don't send' or 'Close'.
                </p>
                <p>
                  Do you want to send this message without a subject? If you
                  want to send, please click 'Send', or you can cancel by
                  pressing 'Don't send' or 'Close'.
                </p>
              </div>
              <DialogFooter>
                <DefaultButton onClick={() => setModalClosed(true)}>
                  Cancel
                </DefaultButton>
                <PrimaryButton onClick={() => setModalClosed(true)}>
                  Submit
                </PrimaryButton>
              </DialogFooter>
            </DialogImported>
          </div>
          <div className={isOpen2 ? 'openDisplay' : 'codeConfirm-demo'}>
            <SyntaxHighlighter
              language="tsx"
              style={oneLight}
              customStyle={{ padding: '10px', lineHeight: '2.5' }}
            >
              {codeDemo}
            </SyntaxHighlighter>
          </div>
          <button
            className="closeConfirm-demo"
            onClick={() => setIsOpen2(!isOpen2)}
          >
            <span className="icon">
              {isOpen2 ? (
                <Icon iconName="fas-caret-up" />
              ) : (
                <Icon iconName="fas-code" />
              )}
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Dialog;
