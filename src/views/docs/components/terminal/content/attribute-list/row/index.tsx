import { generateSelectedItem } from '~/context/hooks'
import { useAppContext } from '~/context/state'
import { TExtendedParameter, TExtendedSchemaOrReference } from '~/open-api/types'
import { ArrowCircleRightIcon } from '@heroicons/react/solid'
import React, { useState } from 'react'
import AttributeRowCollapse from '../row-collapse'
import S from './styles'
import { extractDataToShow } from './utils'
import { ExpandIcon, MinimizeIcon } from './icons'

export type TAttributeRowProps =
  | {
      title: string
      schema: TExtendedSchemaOrReference
    }
  | {
      title: string
      parameter: TExtendedParameter
    }

const AttributeRow: React.FC<TAttributeRowProps> = (props) => {
  const [is_open, setIsOpen] = useState(false)
  const context = useAppContext()
  const { title, ...data } = props
  const { is_required, extension, friendly_type, constraints, schema } = extractDataToShow(data)
  const is_ref_link = '$ref' in schema

  let has_content = extension?.title !== undefined || extension?.getBody !== undefined

  if (!is_ref_link) {
    has_content =
      has_content || schema?.properties !== undefined || schema.type === 'array' || schema.enum !== undefined || schema.description !== undefined
  }

  // Hot fix until we convert identifier_value from bigint to string
  let final_type = friendly_type
  if (title === 'identifier_value') final_type = final_type.replace('Object', 'string')

  return (
    <S.Container>
      <S.MainContent is_clickable={has_content} onClick={() => setIsOpen(!is_open)}>
        <S.Title>{props.title}</S.Title>

        <S.FriendlyType className="highlight-on-hover">
          {final_type}
          {is_required && '*'}
          {constraints.length > 0 && ', '}
          {constraints.length > 0 && <S.Constraints>{constraints.join(', ')}</S.Constraints>}
        </S.FriendlyType>
        {is_ref_link && (
          <S.RefLinkButton
            onClick={() => {
              const new_selected_item = generateSelectedItem({ type: 'schema', title: schema.original_type ?? 'Account' }, context.parser)
              context.setTerminalState({ selected_item: new_selected_item })
            }}
          >
            <ArrowCircleRightIcon width={16} />
          </S.RefLinkButton>
        )}
        {has_content && <S.ExpandIconContainer>{is_open ? <MinimizeIcon /> : <ExpandIcon />}</S.ExpandIconContainer>}
      </S.MainContent>
      {has_content && <AttributeRowCollapse is_open={is_open} schema={schema} />}
    </S.Container>
  )
}

export default AttributeRow
