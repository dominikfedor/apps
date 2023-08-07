// Copyright 2017-2023 @polkadot/react-components authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { DefinitionRpcExt } from '@polkadot/types/types';
import type { DropdownOptions } from '../util/types.js';

import React from 'react';

import Dropdown from '../Dropdown.js';
import { filterDropdownItems } from '../util/index.js';

interface Props {
  className?: string;
  defaultValue?: string;
  isError?: boolean;
  onChange: (value: string) => void;
  options: DropdownOptions;
  value: DefinitionRpcExt;
}

function SelectSection ({ className = '', defaultValue, isError, onChange, options, value }: Props): React.ReactElement<Props> {
  return (
    <Dropdown
      className={`${className} ui--DropdownLinked-Sections`}
      defaultValue={defaultValue}
      isError={isError}
      onChange={onChange}
      onSearch={filterDropdownItems}
      options={options}
      value={value.section}
      withLabel={false}
    />
  );
}

export default React.memo(SelectSection);
