import styled from "styled-components";

export const TagsInput = styled.div`
  display: flex;
  align-items: flex-start;
  flex-wrap: wrap;
  min-height: auto;
  width: 100%;
  padding: 0 8px;
  border: 1px solid rgb(214, 216, 218);
  border-radius: 6px;

  &:focus-within {
    border: 1px solid #0052cc;
  }

  .tags {
    display: flex;
    flex-wrap: wrap;
    padding: 0;
    margin: 8px 0 0 0;
  }

  .tag {
    width: auto;
    height: 32px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #000;
    padding: 0 8px;
    font-size: 14px;
    list-style: none;
    border-radius: 6px;
    margin: 0 8px 8px 0;
    background: #fecb4c;
  }

  .tag-title {
    margin-top: 3px;
  }

  .tag-close-icon {
    display: flex;
    width: 16px;
    height: 16px;

    text-align: center;
    align-content: center;
    justify-content: center;
    align-items: center;
    font-size: 14px;
    margin-left: 8px;
    color: #fff;
    border-radius: 50%;
    background: #000;
    cursor: pointer;
  }
`;
