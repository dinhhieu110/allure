import React from 'react';
import './introduction.scss';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { oneLight } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { Link } from '@gui/fluent-ui-allure';

function Introduction() {
  return (
    <div className="intro-container">
      <div className="logo-image">
        <img src="./img/logo.png" alt="" />
      </div>
      <div className="design-text frame">
        <p className="design-text-title title">Allure Design System</p>
        <p className="content">
          This Allure design system contains both style and interaction
          guideline which can be applied to the online products of AvePoint. It
          can help us to build a consistency user experience for AvePoint
          customers.
        </p>
      </div>
      <div className="frame">
        <p className="title">WCAG2.0 supported</p>
        <p className="content">
          Web Content Accessibility Guidelines (WCAG) 2.0 covers a wide range of
          recommendations for making Web content more accessible. Following
          these guidelines will make content accessible to a wider range of
          people with disabilities, including blindness and low vision, deafness
          and hearing loss, learning disabilities, cognitive limitations,
          limited movement, speech disabilities, photosensitivity and
          combinations of these. Following these guidelines will also often make
          your Web content more usable to users in general.
        </p>
        <div style={{ marginTop: '8px' }}>
          <Link underline>WCAG 2 Overview</Link>
        </div>
      </div>
      <div className="frame">
        <p className="title">Environment Support</p>
      </div>
      <div className="browsers-table">
        <tr>
          <td className="box">
            <div className="browser">
              <img src="./img/edge.jpg" alt="" />
              <span>Edge</span>
            </div>
          </td>
          <td className="box">
            <div className="browser">
              <img src="./img/chrome.png" alt="" />
              <span>Chrome</span>
            </div>
          </td>
          <td className="box">
            <div className="browser">
              <img src="./img/firefox.png" alt="" />
              <span>Firefox</span>
            </div>
          </td>
          <td className="box">
            <div className="browser">
              <img src="./img/opera.png" alt="" />
              <span>Opera</span>
            </div>
          </td>
          <td className="box">
            <div className="browser">
              <img src="./img/safari.png" alt="" />
              <span>Safari</span>
            </div>
          </td>
          <td className="box">
            <div className="browser">
              <img src="./img/electron.png" alt="" />
              <span>Electron</span>
            </div>
          </td>
        </tr>
        <tr>
          <td className="box">Latest 2 versions </td>
          <td className="box">Latest 2 versions </td>
          <td className="box">Latest 2 versions </td>
          <td>Latest 2 versions </td>
          <td className="box">≥ 15 </td>
          <td className="box">Latest 2 versions</td>
        </tr>
      </div>
      <div className="frame">
        <p className="title">Installation</p>
        <p className="content">
          Since Allure UI is hosted on the feed{' '}
          <Link
            to={
              'https://proget.avepoint.net/feeds/avepoint-npm/@gui/fluent-ui-allure'
            }
          >
            avepoint-npm{' '}
          </Link>
          of Proget, you should create a .npmrc file under the root folder of
          your UI project.
        </p>
        <div className="file-guide">
          <p>
            <span style={{ color: '#DD4A68' }}>@gui </span>:
            registry=https://proget.avepoint.net/npm/avepoint-npm/
          </p>
          <p>registry=https://proget.avepoint.net/npm/npm.org/</p>
        </div>
        <p>Then install the Allure UI package:</p>
        <div className="file-guide">
          <p>npm install @gui/fluent-ui-allure</p>
        </div>
      </div>
      <div className="frame">
        <p className="title">Usage</p>
        <p className="content">
          In the root file of your React App, import Allure UI and set the
          corresponding theme and language.
        </p>
        <div className="file-guide">
          <SyntaxHighlighter
            language="tsx"
            style={oneLight}
            customStyle={{ padding: '10px', lineHeight: '2' }}
          >
            {`import { ThemeProvider, getAllureTheme, Themes, Language } from '@gui/fluent-ui-allure';
import * as React from 'react';

const Content = () => {
    return (
        <ThemeProvider theme={getAllureTheme(Themes.Cabolt, Language.EN)}>
            <div />
        </ThemeProvider>
    );
};`}
          </SyntaxHighlighter>
        </div>
      </div>
    </div>
  );
}

export default Introduction;
