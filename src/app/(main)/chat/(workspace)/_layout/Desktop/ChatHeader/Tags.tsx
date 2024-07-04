import {memo} from 'react';
import {Flexbox} from 'react-layout-kit';

const TitleTags = memo(() => {
  // const [model, plugins] = useAgentStore((s) => [
  //   agentSelectors.currentAgentModel(s),
  //   agentSelectors.currentAgentPlugins(s),
  // ]);

  // const showPlugin = useUserStore(modelProviderSelectors.isModelEnabledFunctionCall(model));

  return (
    <Flexbox align={'center'} horizontal>
      {/*<ModelSwitchPanel>*/}
      {/*  <ModelTag model={model} />*/}
      {/*</ModelSwitchPanel>*/}
      {/*{showPlugin && plugins?.length > 0 && <PluginTag plugins={plugins} />}*/}
    </Flexbox>
  );
});

export default TitleTags;
